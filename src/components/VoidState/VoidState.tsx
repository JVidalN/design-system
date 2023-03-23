import { ReactNode } from 'react';

export interface VoidStateProps {
    /** Elemento que será exibido ao centro do componente*/ 
    children: ReactNode;
}

function VoidState({children= 'Nenhum registro encontrado.'}: VoidStateProps) {

    return (
        <div 
            className="
                flex 
                items-center
                justify-center
                bg-neutral-light-light02 
                rounded-lg
                w-full
                h-full
                text-neutral-dark-dark01
                text-sm2
            "
        >
            {children}
        </div>
    )
}

export { VoidState };
