import { Injectable } from '@angular/core';
import {WEB_SKILLS_FULL, webSkill} from "../interfaces/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  webSkillsFull : webSkill[]

  constructor() {
    this.webSkillsFull = [...WEB_SKILLS_FULL];
  }
}
