type StyledListItem = {
  title?: string
  item?: string
};

export type StyledListProps = {
  className?: string
  items: StyledListItem[]
};

export default function StyledList({ className = '', items }: StyledListProps): JSX.Element {
  return (
    <ul className={`grid grid-cols-1 md:grid-cols-2 gap-x-1.5 gap-y-2 mobile-p-l ${className}`}>
      {items.map(({ title, item }, index) => (
        <li className="order-1 flex text-dark-plum/80" key={index}>
          <span className="bg-list-checkmark w-[42px] max-w-[42px] max-h-[24px] bg-no-repeat"></span>
          <span className="w-full max-lg:mobile-p-l lg:desktop-p-l">
            {title ?? item}
          </span>
        </li>
      ))}
    </ul>
  );
}

