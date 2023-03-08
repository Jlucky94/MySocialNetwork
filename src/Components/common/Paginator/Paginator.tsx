import React, {useState} from 'react';
import classes from '../../Users/Users.module.css'
import {setCurrentPage} from "../../../Redux/users-reducer";
import {ThunkAppDispatchType} from "../../../Redux/redux-store";

type PaginatorPropsType = {
    dispatch: ThunkAppDispatchType
    totalItemsCount:number
    pageSize:number
    currentPage:number
    portionSize:number

}
const Paginator = (props: PaginatorPropsType) => {
    const onPageChanged = (pageNumber: number) => {
        props.dispatch(setCurrentPage(pageNumber))
    }
    const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionsCount = Math.ceil(pagesCount / props.pageSize)
    const [currentPortion,setCurrentPortion] = useState<number>(1)
    const leftPortionPageNumber = (currentPortion-1)*props.portionSize +1
    const rightPortionPageNumber = props.portionSize*currentPortion


    return (
        <div>
            {currentPortion>1 &&
            <button onClick={()=> setCurrentPortion(currentPortion-1)}>PREV</button>}
            {pages
                .filter(p=>p>= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => <span key={p}
                                  onClick={() => onPageChanged(p)}
                                  className={props.currentPage === p ? classes.selectedPage : ''}>{p}</span>)}
            {currentPortion<portionsCount &&
                <button onClick={()=> setCurrentPortion(currentPortion+1)}>NEXT</button>}
        </div>

    );
};

export default Paginator;