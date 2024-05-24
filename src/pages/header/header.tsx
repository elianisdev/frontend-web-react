import React, {FC} from "react";
import style from './header.module.scss';

type HeaderProps = {
    description: string,
    element?: React.ReactNode | null,

};
export const HeaderComponent: FC<HeaderProps> = ({description,element}) => {
return (
    <div>
        <header className={style.container}>
            <h1>Page</h1>
            {element !== undefined && <p>Header description</p>}
        </header>

        <p>
            {description}
        </p>
        <br></br>
        <button className={'button button-primary'}>Hola Mundo</button>
    </div>
)
}