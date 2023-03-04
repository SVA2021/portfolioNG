export type projectMode = 'future' | 'actual';
export type editMode = 'old' | 'new';

export const WEB_SKILLS_FULL = [
  'html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript','angular',
  'nextjs', 'vue', 'graphql',
] as const;

export  type webSkill = typeof WEB_SKILLS_FULL[number];
