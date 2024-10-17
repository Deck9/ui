import { library } from "@fortawesome/fontawesome-svg-core";
import * as fasIcons from "@fortawesome/free-solid-svg-icons";
import * as fabIcon from "@fortawesome/free-brands-svg-icons";
import numericInput from "./custom/numeric-input.js";

library.add(
  fasIcons.faAlignCenter,
  fasIcons.faAlignLeft,
  fasIcons.faAlignRight,
  fasIcons.faArrowRight,
  fasIcons.faArrowUp19,
  fasIcons.faAsterisk,
  fasIcons.faAt,
  fasIcons.faBold,
  fasIcons.faBolt,
  fasIcons.faCalendar,
  fasIcons.faChartPie,
  fasIcons.faCheck,
  fasIcons.faCheckCircle,
  fasIcons.faChevronDown,
  fasIcons.faChevronLeft,
  fasIcons.faChevronRight,
  fasIcons.faChevronUp,
  fasIcons.faCircleCheck,
  fasIcons.faCircleNodes,
  fasIcons.faCircleNotch,
  fasIcons.faClipboard,
  fasIcons.faCloudDownload,
  fasIcons.faCloudUpload,
  fasIcons.faCode,
  fasIcons.faCodeBranch,
  fasIcons.faCodeFork,
  fasIcons.faCog,
  fasIcons.faCompass,
  fasIcons.faCrown,
  fasIcons.faDiagramProject,
  fasIcons.faDoorOpen,
  fasIcons.faDotCircle,
  fasIcons.faEllipsis,
  fasIcons.faEllipsisVertical,
  fasIcons.faEnvelope,
  fasIcons.faExclamationTriangle,
  fasIcons.faExternalLink,
  fasIcons.faEye,
  fasIcons.faEyeDropper,
  fasIcons.faEyeSlash,
  fasIcons.faFileLines,
  fasIcons.faFilePdf,
  fasIcons.faFileUpload,
  fasIcons.faFileVideo,
  fasIcons.faFileWaveform,
  fasIcons.faFilter,
  fasIcons.faFilter,
  fasIcons.faFingerprint,
  fasIcons.faFont,
  fasIcons.faGears,
  fasIcons.faGlobe,
  fasIcons.faGripHorizontal,
  fasIcons.faGripVertical,
  fasIcons.faHandPointRight,
  fasIcons.faHandPointRight,
  fasIcons.faHashtag,
  fasIcons.faHeading,
  fasIcons.faHeart,
  fasIcons.faImage,
  fasIcons.faInfoCircle,
  fasIcons.faItalic,
  fasIcons.faLayerGroup,
  fasIcons.faLink,
  fasIcons.faLinkSlash,
  fasIcons.faList,
  fasIcons.faListOl,
  fasIcons.faListUl,
  fasIcons.faLocationArrow,
  fasIcons.faLocationCrosshairs,
  fasIcons.faLock,
  fasIcons.faLockOpen,
  fasIcons.faMedal,
  fasIcons.faMessage,
  fasIcons.faMicrochip,
  fasIcons.faPencilAlt,
  fasIcons.faPenToSquare,
  fasIcons.faPhone,
  fasIcons.faPlayCircle,
  fasIcons.faPlus,
  fasIcons.faPlusCircle,
  fasIcons.faPoo,
  fasIcons.faPuzzlePiece,
  fasIcons.faQuestion,
  fasIcons.faQuoteLeft,
  fasIcons.faQuoteRight,
  fasIcons.faReply,
  fasIcons.faReplyAll,
  fasIcons.faRightLong,
  fasIcons.faRobot,
  fasIcons.faSave,
  fasIcons.faShield,
  fasIcons.faSignal,
  fasIcons.faSignature,
  fasIcons.faSignature,
  fasIcons.faSquareCheck,
  fasIcons.faStar,
  fasIcons.faStrikethrough,
  fasIcons.faTerminal,
  fasIcons.faTextSlash,
  fasIcons.faTimes,
  fasIcons.faTrash,
  fasIcons.faTree,
  fasIcons.faTrophy,
  fasIcons.faTurnDown,
  fasIcons.faUnderline,
  fasIcons.faUpload,
  fasIcons.faUser,
  fasIcons.faUserShield,
  fasIcons.faWandMagicSparkles,

  // Brands
  fabIcon.faTwitter,
  fabIcon.faInstagram,
  fabIcon.faGithub,
  fabIcon.faLinkedin,
  fabIcon.faFacebook,

  // Custom
  numericInput.definition
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default [...Object.keys((library as any).definitions.fas)].sort();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const brands = [...Object.keys((library as any).definitions.fab)].sort();
