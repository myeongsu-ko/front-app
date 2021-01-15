import { useEffect } from "react";
import { ValueType } from "realgrid";
import axios from 'axios';

export const fields = [{ //필드 생성
    fieldName: 'stuid',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'name',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'phone',
    dataType: ValueType.TEXT
},
{
    fieldName: 'age',
    dataType: ValueType.NUMBER
},
{
    fieldName: 'hobby',
    dataType: ValueType.TEXT
},
{
    fieldName: 'job',
    dataType: ValueType.TEXT
},
{
    fieldName: 'email',
    dataType: ValueType.TEXT
},
{
    fieldName: 'address',
    dataType: ValueType.TEXT
},
{
    fieldName: 'number',
    dataType: ValueType.NUMBER
}
];

export const columns = [{ //칼럼 값 지정하기 
    name: "stuid",
    fieldName: "stuid",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "stuid",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    }
}, {
    name: "name",
    fieldName: "name",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "name",
        showTooltip: false,
    }
}, {
    name: "phone",
    fieldName: "phone",
    type: "data",
    width: "220",
    styles: {
        "textAlignment": "center"
    },
    header: "phone"
},{
    name: "age",
    fieldName: "age",
    type: "data",
    width: "130",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "age",
        showTooltip: false,
    },
    numberFormat: '0'
},{
    name: "hobby",
    fieldName: "hobby",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "hobby",
        showTooltip: false,
    },
},{
    name: "job",
    fieldName: "job",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "job",
        showTooltip: false,
    },
},{
    name: "email",
    fieldName: "email",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "email",
        showTooltip: false,
    },
},{
    name: "address",
    fieldName: "address",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "address",
        showTooltip: false,
    },
},{
    name: "number",
    fieldName: "number",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "number",
        showTooltip: false,
    },
}
]