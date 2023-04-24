var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Children, useEffect, useState } from "react";
import { Icon } from "../IconComponent/Icon";
import { VoidState } from "../VoidState/VoidState";
/** A Table exibe dados de maneira tabular e estruturada.  */
function TableRoot(_a) {
    var { title, children = null, values, hasTotalizer = false, maxHeight = '430px' } = _a, props = __rest(_a, ["title", "children", "values", "hasTotalizer", "maxHeight"]);
    const propertiesFromColumnChildren = [];
    Children.forEach(children, (child) => {
        if ((child === null || child === void 0 ? void 0 : child.type) === TableColumn)
            propertiesFromColumnChildren.push(child === null || child === void 0 ? void 0 : child.props);
    });
    const treatingValues = (value) => {
        if (!propertiesFromColumnChildren) {
            return [];
        }
        return propertiesFromColumnChildren.reduce(function (acc, item) {
            acc[item.field] = value[item.field];
            return acc;
        }, {});
    };
    const tableData = values.map(treatingValues);
    const [filteredTableData, setFilteredTableData] = useState(tableData);
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState('');
    const [order, setOrder] = useState('asc');
    const [columnChipExpanded, setColumnChipExpanded] = useState(false);
    const handleColumnChipExpanded = () => setColumnChipExpanded(prevState => !prevState);
    useEffect(() => {
        let filteredValues = tableData.filter(item => {
            return Object.values(item).some((value) => value.toString().toLowerCase().includes(search.toLowerCase()));
        });
        setFilteredTableData(filteredValues);
    }, [search]);
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...filteredTableData].sort((a, b) => {
                if (a[sortField] === null)
                    return 1;
                if (b[sortField] === null)
                    return -1;
                if (a[sortField] === null && b[sortField] === null)
                    return 0;
                return (a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                    numeric: true,
                }) * (sortOrder === "asc" ? 1 : -1));
            });
            setFilteredTableData(sorted);
        }
    };
    const handleSortingChange = (field) => {
        const sortOrder = field === sortField && order === "asc" ? "desc" : "asc";
        setSortField(field);
        setOrder(sortOrder);
        handleSorting(field, sortOrder);
    };
    const isValidTypeToHead = (type) => (type !== TableSearch && type !== TableRegister);
    const creatingTableHead = (child, idx) => {
        if (isValidTypeToHead(child.type)) {
            return (_jsx("th", Object.assign({ className: `
                    bg-neutral-light-light01 
                    ${(child === null || child === void 0 ? void 0 : child.props.sortable) ? "text-brand-primary-dark cursor-pointer" : "text-neutral-dark-base"}
                    border 
                    border-neutral-light-light03 
                    text-left p-[15px]
                    h-[55px]
                    text-sm
                    `, onClick: (child === null || child === void 0 ? void 0 : child.props.sortable) ? () => handleSortingChange(child === null || child === void 0 ? void 0 : child.props.field) : undefined }, { children: _jsxs("div", Object.assign({ className: "flex gap-2 items-center" }, { children: [child === null || child === void 0 ? void 0 : child.props.header, (child === null || child === void 0 ? void 0 : child.props.sortable) && (_jsx(Icon, { name: 'sort', width: '24px', height: '24px' }))] })) }), `th${idx}`));
        }
    };
    const returnCellElementByType = (child, item, iTd) => {
        var _a;
        switch (child.type) {
            case TableAction:
                return (_jsx("td", Object.assign({ className: "\n                                bg-neutral-light-base\n                                border \n                                border-neutral-light-light03 \n                                p-[15px]\n                                text-neutral-dark-dark01\n                                text-center\n                            " }, { children: React.cloneElement(child, { children: child.props.children, onClick: child.props.onClick(item) }) }), `tdAction${iTd}`));
            case TableColumn:
                return (_jsx("td", Object.assign({ className: `
                                bg-neutral-light-base
                                border 
                                border-neutral-light-light03 
                                text-left 
                                p-[15px]
                                text-neutral-dark-dark01
                            `, width: (_a = child.props.maxWidth) !== null && _a !== void 0 ? _a : '100px' }, { children: Object.values(Object.fromEntries(Object.entries(item).filter((item) => item[0] === child.props.field))).map((value, idx) => {
                        if (child.props.chipped) {
                            if (Array.isArray(value)) {
                                const [first] = value;
                                return (_jsxs("div", Object.assign({ className: "flex gap-1 items-center flex-wrap" }, { children: [columnChipExpanded ?
                                            (value.map((innerValue, idxInner) => (_jsx("div", Object.assign({ className: "\n                                                                    py-[2px]\n                                                                    px-2\n                                                                    h-[25px]\n                                                                    bg-brand-primary-dark/[0.15]\n                                                                    rounded-[20px]\n                                                                    flex\n                                                                    flex-col\n                                                                    items-center\n                                                                " }, { children: innerValue }), `divChippedInner${idxInner}`)))) :
                                            (_jsxs(_Fragment, { children: [_jsx("div", Object.assign({ className: "\n                                                                    py-[2px]\n                                                                    px-2\n                                                                    h-[25px]\n                                                                    bg-brand-primary-dark/[0.15]\n                                                                    rounded-[20px]\n                                                                    flex\n                                                                    flex-col\n                                                                    items-center\n                                                                " }, { children: first })), _jsx("div", Object.assign({ className: "\n                                                                    py-[2px]\n                                                                    px-2\n                                                                    h-[25px]\n                                                                    bg-brand-primary-dark/[0.15]\n                                                                    rounded-[20px]\n                                                                    flex\n                                                                    flex-col\n                                                                    items-center\n                                                                " }, { children: `+${value.length - 1}` }))] })), _jsx("div", Object.assign({ className: "cursor-pointer", onClick: handleColumnChipExpanded }, { children: _jsx(Icon, { name: columnChipExpanded ? 'arrowDown' : 'arrowUp', width: '10px', height: '6px' }) }))] }), `divChipped${idx}`));
                            }
                            else {
                                return (_jsx("div", Object.assign({ className: "\n                                                    py-[2px]\n                                                    px-2\n                                                    h-[25px]\n                                                    max-w-max\n                                                    bg-brand-primary-dark/[0.15]\n                                                    rounded-[20px]\n                                                    flex\n                                                    flex-col\n                                                    items-center\n                                                " }, { children: value }), `divNotChipped${idx}`));
                            }
                        }
                        return _jsx(_Fragment, { children: value });
                    }) }), `tdColumn${iTd}`));
        }
    };
    const creatingTableBody = (item, iTr) => {
        return (_jsx("tr", { children: Children.map(children, (child, iTd) => returnCellElementByType(child, item, iTd)) }, `tr${iTr}`));
    };
    const getTitle = () => {
        return title &&
            (_jsx("div", Object.assign({ className: "text-lg font-roboto text-neutral-dark-base" }, { children: title })));
    };
    const getSearch = () => {
        return Children.map(children, (child, idx) => {
            if (child.type === TableSearch) {
                return (_jsx("div", Object.assign({ className: "grow-0" }, { children: React.cloneElement(child, {
                        children: Children.map(child.props.children, (innerChild) => {
                            if (innerChild.type.displayName === 'InputText.Root') {
                                return React.cloneElement(innerChild, {
                                    children: Children.map(innerChild.props.children, (innerChildRoot) => {
                                        if (innerChildRoot.type.displayName === 'InputText.Input') {
                                            return React.cloneElement(innerChildRoot, Object.assign({ type: 'search', value: search, onChange: handleSearchChange }, innerChildRoot.props));
                                        }
                                        return innerChildRoot;
                                    })
                                });
                            }
                        })
                    }) }), `search${idx}`));
            }
        });
    };
    const getRegister = () => {
        return Children.map(children, (child, idx) => {
            if (child.type === TableRegister) {
                return (_jsx("div", { children: child }, `register${idx}`));
            }
        });
    };
    const getTotalizer = () => {
        return hasTotalizer
            && (_jsx("div", Object.assign({ className: "flex justify-end text-neutral-dark-dark01" }, { children: `Total: ${filteredTableData.length} ${filteredTableData.length > 1 ? "itens" : "item"}` })));
    };
    return (_jsxs("div", Object.assign({ className: "flex flex-col gap-2 w-full font-roboto text-sm" }, { children: [_jsxs("div", Object.assign({ className: "flex justify-between h-10 w-full gap-10 items-center" }, { children: [getTitle(), getSearch(), getRegister()] })), _jsx("div", Object.assign({ className: `overflow-auto h-[${maxHeight}]` }, { children: (children && values) ? (_jsxs("table", Object.assign({ className: "border-collapse w-full rounded-sm" }, props, { children: [_jsx("thead", { children: _jsx("tr", { children: Children.map(children, creatingTableHead) }) }), _jsx("tbody", { children: filteredTableData.map(creatingTableBody) })] })))
                    :
                        _jsx("div", Object.assign({ className: "w-full h-[310px]" }, { children: _jsx(VoidState, { children: "Nenhum dado para ser exibido." }) })) })), getTotalizer()] })));
}
function TableColumn(props) {
    return null;
}
function TableAction({ onClick, children }) {
    return _jsx("button", Object.assign({ onClick: onClick }, { children: children }));
}
function TableSearch({ children }) {
    return _jsx(_Fragment, { children: children });
}
function TableRegister({ children }) {
    return _jsx(_Fragment, { children: children });
}
TableRoot.displayName = 'Table.Root';
TableColumn.displayName = 'Table.Column';
TableAction.displayName = 'Table.Action';
TableSearch.displayName = 'Table.Search';
TableRegister.displayName = 'Table.Register';
export const Table = {
    Root: TableRoot,
    Column: TableColumn,
    Action: TableAction,
    Search: TableSearch,
    Register: TableRegister
};
