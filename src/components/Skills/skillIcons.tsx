import type { IconType } from 'react-icons'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiOpenai,
  SiScikitlearn,
  SiPandas,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiReactrouter,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJsonwebtokens,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiJest,
  SiGithub,
  SiDocker,
  SiVercel,
  SiLinux,
  SiOnnx,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaMagnifyingGlass, FaCode } from 'react-icons/fa6'
import { TbApi, TbVectorTriangle } from 'react-icons/tb'

/** Maps a skill `icon` slug (from constants) to a brand/concept glyph.
 *  Concepts without an official brand mark use a representative generic icon. */
const ICONS: Record<string, IconType> = {
  // Languages
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  sql: FaDatabase,
  cpp: SiCplusplus,
  java: FaJava,
  // AI / ML
  rag: FaMagnifyingGlass,
  vector: TbVectorTriangle,
  onnx: SiOnnx,
  openai: SiOpenai,
  scikitlearn: SiScikitlearn,
  pandas: SiPandas,
  // Frontend
  react: SiReact,
  tailwind: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss,
  reactrouter: SiReactrouter,
  axios: SiAxios,
  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  fastapi: SiFastapi,
  rest: TbApi,
  jwt: SiJsonwebtokens,
  // Databases
  postgresql: SiPostgresql,
  pgvector: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  // Testing & Tools
  jest: SiJest,
  github: SiGithub,
  docker: SiDocker,
  vercel: SiVercel,
  linux: SiLinux,
}

/** Resolve a slug to its icon component, falling back to a generic code glyph. */
export function getSkillIcon(slug: string | undefined): IconType {
  return (slug && ICONS[slug]) || FaCode
}
