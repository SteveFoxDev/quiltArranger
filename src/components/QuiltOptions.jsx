import { useDispatch, useSelector } from "react-redux";
import { setBgColor } from "../store/slices/quiltSlice";


const QuiltOptions = () => {
    const dispatch = useDispatch();
    const bgColor = useSelector((state) => state.quilt.bgColor);

    const handleChange = (event) => {
        dispatch(setBgColor(event.target.checked));
    };

    return (
        <div className="container d-flex justify-content-end gap-1 mb-2">
            <div className=" form-check form-switch">
                <input onChange={(e) => handleChange(e)} type="checkbox" id="bgColorSwitch" className="form-check-input cursor-pointer check-switch" checked={bgColor}/>
                <label htmlFor="bgColorSwitch" className="form-check-label">Color</label>
            </div>
        </div>
    )
}

export default QuiltOptions;