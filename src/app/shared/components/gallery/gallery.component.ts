import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LangService} from "../../../layout/services/lang.service";
import {GalleryService} from "../../services";
import {interval, Subscription,} from "rxjs";
import {navButtonsT} from "../../../interfaces/gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  timeInterval: number
  slideShow: Subscription
  myLang$: Subscription
  navButtons: navButtonsT
  imgAlt: string
  activeImgSrc: string
  activeImgIdx: number
  isSlideShowMode: boolean
  isFullScreenMode: boolean
  @Input() imgList?: string[]

  constructor(
    public lang: LangService,
    public gallery: GalleryService,
  ) {
    this.timeInterval = 3000;
    this.slideShow = Subscription.EMPTY;
    this.myLang$ = Subscription.EMPTY;
    if (this.imgList === undefined) this.imgList = [];
    this.activeImgIdx = 0;
    this.activeImgSrc = this.imgList[this.activeImgIdx] ?? '';
    this.navButtons = this.gallery.navButtons[this.lang.lastLang];
    this.imgAlt = this.gallery.imgAlt[this.lang.lastLang];
    this.isSlideShowMode = false;
    this.isFullScreenMode = false;
  }

  ngOnInit(): void {
    this.activeImgSrc = (this.imgList && this.imgList.length > 0) ? this.imgList[this.activeImgIdx] : '';
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.navButtons = this.gallery.navButtons[lang];
      this.imgAlt = this.gallery.imgAlt[lang];
    })
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

  showNextSlide() {
    if (!this.imgList) return
    this.activeImgIdx = this.activeImgIdx === this.imgList.length - 1 ? 0 : this.activeImgIdx + 1;
    this.activeImgSrc = this.imgList[this.activeImgIdx];
  }

  showPrevSlide() {
    if (!this.imgList) return
    this.activeImgIdx = this.activeImgIdx === 0 ? this.imgList.length - 1 : this.activeImgIdx - 1;
    this.activeImgSrc = this.imgList[this.activeImgIdx];
  }

  toggleSlideShowMode() {
    if (!this.imgList) return
    this.isSlideShowMode = !this.isSlideShowMode;
    if (this.isSlideShowMode) {
      this.slideShow = interval(this.timeInterval).subscribe(() => this.showNextSlide())
    } else {
      this.slideShow.unsubscribe();
    }
  }

  toggleFullScreenMode() {
    if (!this.imgList) return
    this.isFullScreenMode = !this.isFullScreenMode;
  }

}
