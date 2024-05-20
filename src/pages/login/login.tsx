import React, {FC} from 'react';
import styles from './login.module.scss';

export const Login: FC = () => {
    return (
        <div className={`${styles['container-login']} margin-center`}>

            <div className={'full-width text-center padding-5'}>
                <img className={styles.image}
                     src={"https://cdn-icons-png.flaticon.com/512/5087/5087579.png"}
                     alt="image Login"/>
            </div>

            <div className={'full-width padding-4'}>
                <form>

                    <div className={'margin-center'}>
                        <div className={'text-center'}>
                            {/*<label className={styles.text}> <br/><b>Username: </b></label>*/}
                            <input className={'input'} placeholder="email" required/>
                        </div>
                        <div className={'text-center'}>
                            {/*<label className={styles.text}><br/><b>Password: </b></label>*/}
                            <input className={'input'} placeholder="password"/>
                        </div>
                    </div>

                    <div className={'text-center padding-4'}>
                        <button className={'button button-primary'}>
                            Login
                        </button>
                    </div>

                    <div>
                        <label className={'container-label'}>Forgot Password?
                            <input type="checkbox" checked={true}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className={'container-label'}>You do not have an account? Register
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>

                    </div>


                    <div className={'text-center font-size-1 padding-5'}> Todos los derechos reservados</div>

                </form>
            </div>

        </div>
    );
};