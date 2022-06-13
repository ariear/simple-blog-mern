import { useMainContext } from "../config/contexts/MainContext"
import { BtnGreen } from "./atom/BtnGreen"

export const Paging = () => {
    const context = useMainContext()
    
    return (
        <div className="flex items-center pb-10">
            {
                context.page > 1 &&
            <p onClick={() => context.prevPaging()}><BtnGreen title="prev" /></p>
            }
            <p className="mx-4">{context.dataPage}/{context.totalPage} </p>
            {
                context.page < context.totalPage &&
            <p onClick={() => context.nextPaging()}><BtnGreen title="next" /></p>
            }
        </div>
    )
}