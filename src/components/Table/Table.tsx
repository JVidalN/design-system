import React, { Children, Key, ReactElement, ReactNode, useEffect, useState } from "react";
import { Icon } from "../IconComponent/Icon";
import { VoidState } from "../VoidState/VoidState";

export interface TableRootProps {
    values: any[],
    children: ReactElement | ReactElement[] | null;
    title?: string;
    hasTotalizer?: boolean;
    maxHeight?: string
}
 /** A Table exibe dados de maneira tabular e estruturada.  */ 
function TableRoot({
                        title, 
                        children = null, 
                        values, 
                        hasTotalizer = false,
                        maxHeight = '430px',
                        ...props
                    }: TableRootProps) 
{
    const propertiesFromColumnChildren: any[] = [];

    Children.forEach(children, (child) => {
        if(child?.type === TableColumn)
            propertiesFromColumnChildren.push(child?.props);
    });

    const treatingValues = (value: any) =>{

        if(!propertiesFromColumnChildren){
            return [];
        }

        return propertiesFromColumnChildren.reduce(function(acc, item) {
            acc[item.field] = value[item.field];
            return acc;
        }, {});
    };
    

    let tableData:any = [];
    const [filteredTableData, setFilteredTableData] = useState(tableData);
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState('');
    const [order, setOrder] = useState('asc');
    const [columnChipExpanded, setColumnChipExpanded] = useState(false);

    const handleColumnChipExpanded = () => setColumnChipExpanded(prevState => !prevState);

    useEffect(() => {
        tableData = values.map(treatingValues);
        setFilteredTableData(tableData);
    }, [values])

    useEffect(() => {
        let filteredValues = tableData.filter((item:any) => {
            return Object.values(item).some((value: any) => value.toString().toLowerCase().includes(search.toLowerCase()));
        });
        setFilteredTableData(filteredValues);
    }, [search]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
      
    const handleSorting = (sortField: string, sortOrder: string) => {
        if (sortField) {
            const sorted = [...filteredTableData].sort((a, b) => {
             if (a[sortField] === null) return 1;
             if (b[sortField] === null) return -1;
             if (a[sortField] === null && b[sortField] === null) return 0;
             return (
              a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
               numeric: true,
              }) * (sortOrder === "asc" ? 1 : -1)
             );
            });
            setFilteredTableData(sorted);
        }
    };

    const handleSortingChange = (field: string) => {
        
        const sortOrder = field === sortField && order === "asc" ? "desc" : "asc";
        setSortField(field);
        setOrder(sortOrder);
        handleSorting(field, sortOrder);
    };

    const creatingTableHead = (child: any, idx: number) => {
        switch (child.type) {
            case TableAction:
                return (
                    <th 
                    key={`th${idx}`}
                        className={`
                        bg-neutral-light-light01 
                        ${child?.props.sortable?"text-brand-primary-dark cursor-pointer":"text-neutral-dark-base"}
                        border 
                        border-neutral-light-light03 
                        text-left p-[15px]
                        h-[55px]
                        text-sm
                        max-w-fit
                        `}
                        onClick={child?.props.sortable?() => handleSortingChange(child?.props.field):undefined}
                    >
                        <div className="flex gap-2 items-center">
                            {child?.props.header}
                            {
                                child?.props.sortable && (
                                    <Icon 
                                        name= 'sort'
                                        width= '24px'
                                        height= '24px'
                                    /> 
                                )
                            }
                        </div>
                    </th>
                    )
            case TableColumn:
                return (
                    <th 
                    key={`th${idx}`}
                        className={`
                        bg-neutral-light-light01 
                        ${child?.props.sortable?"text-brand-primary-dark cursor-pointer":"text-neutral-dark-base"}
                        border 
                        border-neutral-light-light03 
                        text-left p-[15px]
                        h-[55px]
                        text-sm
                        `}
                        onClick={child?.props.sortable?() => handleSortingChange(child?.props.field):undefined}
                    >
                        <div className="flex gap-2 items-center">
                            {child?.props.header}
                            {
                                child?.props.sortable && (
                                    <Icon 
                                        name= 'sort'
                                        width= '24px'
                                        height= '24px'
                                    /> 
                                )
                            }
                        </div>
                    </th>
                    )
        }
    }

    const returnCellElementByType = (child: any, item: any, iTd: number):ReactNode => {
        switch (child.type) {
            case TableAction:
                return (
                        <td 
                            key={`tdAction${iTd}`}
                            className="
                                bg-neutral-light-base
                                border 
                                border-neutral-light-light03 
                                p-[15px]
                                text-neutral-dark-dark01
                                text-center
                            "
                        >
                            {React.cloneElement(child, { children: child.props.children, onClick: child.props.onClick(item)})}
                        </td>
                    )
            case TableColumn:
                return (
                        <td 
                            key={`tdColumn${iTd}`}
                            className={`
                                bg-neutral-light-base
                                border 
                                border-neutral-light-light03 
                                text-left 
                                p-[15px]
                                text-neutral-dark-dark01
                            `}
                            width={child.props.maxWidth??'100px'}
                        >
                            {Object.values(
                                Object.fromEntries(
                                    Object.entries(item).filter((item)=> item[0] === child.props.field)
                                )
                            ).map((value: any, idx: number) => {
                                if(child.props.chipped){
                                    if(Array.isArray(value)){
                                        const [first] = value;
                                        return (
                                            <div key={`divChipped${idx}`} className="flex gap-1 items-center flex-wrap">
                                                {
                                                    columnChipExpanded?
                                                    (
                                                        value.map((innerValue, idxInner)=> (
                                                            <div 
                                                                key={`divChippedInner${idxInner}`}
                                                                className="
                                                                    py-[2px]
                                                                    px-2
                                                                    h-[25px]
                                                                    bg-brand-primary-dark/[0.15]
                                                                    rounded-[20px]
                                                                    flex
                                                                    flex-col
                                                                    items-center
                                                                "
                                                            >
                                                                {innerValue}
                                                            </div>
                                                        ))
                                                    ):
                                                    (
                                                        <>
                                                            <div 
                                                                className="
                                                                    py-[2px]
                                                                    px-2
                                                                    h-[25px]
                                                                    bg-brand-primary-dark/[0.15]
                                                                    rounded-[20px]
                                                                    flex
                                                                    flex-col
                                                                    items-center
                                                                "
                                                                >
                                                                {first}
                                                            </div>
                                                            <div 
                                                                className="
                                                                    py-[2px]
                                                                    px-2
                                                                    h-[25px]
                                                                    bg-brand-primary-dark/[0.15]
                                                                    rounded-[20px]
                                                                    flex
                                                                    flex-col
                                                                    items-center
                                                                "
                                                                >
                                                                {`+${value.length-1}`}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                <div 
                                                    className="cursor-pointer" 
                                                    onClick={handleColumnChipExpanded}
                                                >
                                                    <Icon 
                                                        name={columnChipExpanded?'arrowDown':'arrowUp'}
                                                        width= '10px'
                                                        height= '6px'
                                                    /> 
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div 
                                                key={`divNotChipped${idx}`}
                                                className="
                                                    py-[2px]
                                                    px-2
                                                    h-[25px]
                                                    max-w-max
                                                    bg-brand-primary-dark/[0.15]
                                                    rounded-[20px]
                                                    flex
                                                    flex-col
                                                    items-center
                                                "
                                            >
                                                {value}
                                            </div>
                                        );
                                    }
                                }
                                return <>{value}</>;
                            })}
                        </td>
                    )
        }
    }

    const creatingTableBody = (item: object, iTr: Key | null | undefined)=>{
        return (
            <tr key={`tr${iTr}`}>
                {
                    Children.map(children, (child: any, iTd) => returnCellElementByType(child, item, iTd))
                }
            </tr>
        )
    }

    const getTitle = () =>{
        return title && 
                (
                    <div className="text-lg font-roboto text-neutral-dark-base">
                        {title}
                    </div>
                )
    }

    const getSearch = () =>{
        return Children.map(children, (child: any, idx:number) => {
            if(child.type === TableSearch){
                return (
                    <div key={`search${idx}`} className="grow-0">
                        { 
                            React.cloneElement(child, {
                                children: Children.map(child.props.children, (innerChild: any) => {
                                    if(innerChild.type.displayName === 'InputText.Root'){
                                        return React.cloneElement(innerChild, {
                                            children: Children.map(innerChild.props.children, (innerChildRoot: any) => {
                                                if(innerChildRoot.type.displayName === 'InputText.Input')
                                                {
                                                    return React.cloneElement(innerChildRoot, 
                                                        { 
                                                            type: 'search',
                                                            value: search,
                                                            onChange: handleSearchChange,
                                                            ...innerChildRoot.props,
                                                        }
                                                    )
                                                }
                                                return innerChildRoot;
                                            })
                                        })
                                    }
                                })
                            })
                        }
                    </div>
                )
            }
        })     
    }

    const getRegister = () =>{
        return Children.map(children, (child: any, idx:number) => {
            if(child.type === TableRegister){
                return (
                    <div key={`register${idx}`}>
                        {child}
                    </div>
                )
            }
        })    
    }

    const getTotalizer = () =>{
        return hasTotalizer
            && (
                <div className="flex justify-end text-neutral-dark-dark01">
                {`Total: ${filteredTableData.length} ${filteredTableData.length>1?"itens":"item"}`}
                </div>
            )
    }

    return (
        <div className="flex flex-col gap-2 w-full font-roboto text-sm">
            <div className="flex justify-between h-10 w-full gap-10 items-center">
                {getTitle()}
                {getSearch()}
                {getRegister()}
            </div>
            <div className={`overflow-auto h-[${maxHeight}]`}>
            {
                (children && values)?(
                        <table 
                            className="border-collapse w-full rounded-sm" 
                            {...props}
                        >
                            <thead>
                                <tr>
                                    {Children.map(children, creatingTableHead)}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredTableData.map(creatingTableBody)
                                }
                            </tbody>
                            
                        </table>
                    )
                    :
                    <div className="w-full h-[310px]">
                        <VoidState>Nenhum dado para ser exibido.</VoidState>
                    </div>
            }
            </div>
            {getTotalizer()}
        </div>
    )
}
export interface ColumnProps {
    header: string,
    field: string,
    sortable?: boolean,
    maxWidth?: string,
    dataType: string,
    chipped?: boolean,
    format?: string,
}

function TableColumn( props : ColumnProps) {
    return null;
}

export interface ActionProps {
    children?: ReactNode;
    onClick?: (line: any) => void;
}

function TableAction( {onClick, children} : ActionProps) {
    return <button onClick={onClick}>{children}</button>;
}

export interface SearchProps {
    children?: ReactNode;
}

function TableSearch( {children} : SearchProps) {
    return <>{children}</>;
}

export interface RegisterProps {
    children?: ReactNode;
}

function TableRegister( {children} : RegisterProps) {
    return <>{children}</>;
}

TableRoot.displayName = 'Table.Root';
TableColumn.displayName = 'Table.Column';
TableAction.displayName = 'Table.Action';
TableSearch.displayName = 'Table.Search';
TableRegister.displayName = 'Table.Register';

export const Table =
{ 
    Root: TableRoot,
    Column: TableColumn,
    Action: TableAction,
    Search: TableSearch,
    Register: TableRegister
};
