import {
  faArrowUp,
  faBarsStaggered,
  faChevronDown,
  faGear,
  faChevronLeft,
  faCopy,
  faLink,
  faPlus,
  faRotateRight,
  faSquare,
  faTrash,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconProps = Omit<FontAwesomeIconProps, "icon">;

export function ArrowUpIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faArrowUp} {...props} />;
}

export function CopyIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faCopy} {...props} />;
}

export function PlusIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faPlus} {...props} />;
}

export function RegenerateIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faRotateRight} {...props} />;
}

export function StopIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faSquare} {...props} />;
}

export function ThreadIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faLink} {...props} />;
}

export function RailOpenIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faBarsStaggered} {...props} />;
}

export function RailCloseIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faChevronLeft} {...props} />;
}

export function SettingsIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faGear} {...props} />;
}

export function TrashIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faTrash} {...props} />;
}

export function QuoteIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faQuoteLeft} {...props} />;
}

export function ChevronDownIcon(props: IconProps) {
  return <FontAwesomeIcon aria-hidden="true" icon={faChevronDown} {...props} />;
}
