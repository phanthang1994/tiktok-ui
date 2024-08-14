import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";
function Image({ src, alt,className,fallback = images.noImage, ...props }, ref) {
    const [fallbackSrc, setFallbackSrc] = useState('');
    const handleLoad = () => {
        setFallbackSrc(fallback);
    };

    return ( <img className={classNames(styles.wrapper, className)} src={fallbackSrc || src} alt={alt} ref={ref} {...props} onError={handleLoad} /> );
}

export default forwardRef(Image);