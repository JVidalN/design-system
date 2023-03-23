interface CardProps {
  title?: string;
  titleAlignment?: 'left' | 'center' | 'right';
  width?: string;
  height?: string;
  children: React.ReactNode;
};


function Card({
  title,
  titleAlignment = 'center',
  width = 'full',
  height = 'auto',
  children,
}: CardProps ){

  return (
    <div
      className={`
        bg-neutral-light-base 
        rounded-xl 
        border
        border-neutral-light-light03
        shadow-md
        p-6
        overflow-y-auto
      `}
      style={{
        width: `${width === 'full' ? '100%' : width}`, 
        height: `${height === 'auto' ? 'auto' : height}`
      }}
    >
      {title && (
        <div
          className={`
            font-bold
            text-lg
            text-neutral-dark-base
            mb-4 
            ${
              titleAlignment === 'left'
              ? 'text-left'
              : titleAlignment === 'center'
              ? 'text-center'
              : 'text-right'
            }
          `}
        >
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};


export { Card };
