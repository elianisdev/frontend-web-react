import React, {FC} from "react";
import style from './header.module.scss';

type HeaderProps = {
    description: string,
    element?: string,

};
export const HeaderComponent: FC<HeaderProps> = ({description,element}) => {
return (
    <div>
        <header className={style.container}>
            <h1>Page</h1>
            {element && <p>{element}</p>}
            <button className={'button button-primary'}>Hola Mundo</button>
        </header>
    </div>
)
}