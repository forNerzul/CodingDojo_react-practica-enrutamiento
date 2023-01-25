import { useParams } from "react-router-dom";
const Param = () => {
    const { param, textColor, bgColor } = useParams();
    console.log(param);
    console.log(textColor);
    console.log(bgColor)

    const flag = isNaN(param);
    return (
        <>
            {
                flag ? <h2 style={{
                    color: textColor,
                    backgroundColor: bgColor
                }}>
                            The word is: {param}
                        </h2> 
                        : 
                        <h2>
                            The number is: {param}
                        </h2>
            }
        </>
    );
};
export default Param;