import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import css from '../styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

function Footer({ children }) {
    return (
        <>
            <footer className={css.footer}>
                <div className={css.socialmedia}>
                    <div className={css.facebook}>
                        <a
                            href="https://www.facebook.com/AweAndReverence"
                            title="Awe & Reverence on Facebook"
                            target="_blank"
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </div>
                        </a>
                    </div>
                    <div className={css.twitter}>
                        <a
                            href="https://twitter.com/aweandreverence"
                            title="Awe & Reverence on Twitter"
                            target="_blank"
                        >
                            <div className={css.icon}>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.copyright}>
                    <p>&copy; Awe and Reverence 2020</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
