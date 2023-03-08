import {UserPropsType} from "../Redux/users-reducer";


export const updateObjectArray = (items:UserPropsType[], itemId:number,objPropName:number,newObjProps:any) => {
    items.map((u: any) => u[objPropName] === itemId ? {
        ...u,
        ...newObjProps
    } : u)

}