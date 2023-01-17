import styled from "styled-components";
export const Style = styled.div `
.info{
    &.person{
        display:flex;
        align-item:center;
        gap:10px;
        flex-wrap:wrap
    }
    li{
        list-style:none;
    }
    .poster{
        width:150px;
        height:auto;
    }
}
`
