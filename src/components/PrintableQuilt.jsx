import { forwardRef } from "react";

const PrintableQuilt = forwardRef((props, ref) => {
    return (
        <div {...props} ref={ref} className="container mb-5">
            {props.children}
        </div>
    )
});

PrintableQuilt.displayName = 'PrintableQuilt';

export default PrintableQuilt;