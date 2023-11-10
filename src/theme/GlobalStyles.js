import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background:${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
}
.rounded-full{
        --tw-ring-color: ${({ theme }) => theme.colors.invert};

}
.card {
     background: ${({ theme }) => theme.colors.body2};
}
.card2 {
     background: ${({ theme }) => theme.colors.body3};
}

.custbg{
       background-color: ${({ theme }) => theme.colors.text};
       border:none;
}

.dwbg {
     background: ${({ theme }) => theme.colors.body3};
}
.dwtxt {
    color:${({ theme }) => theme.colors.text};
}
.dwtxt:hover {
    background-color:${({ theme }) => theme.colors.body};
    cursor:pointer;
}

.btn {
    border-color: ${({ theme }) => theme.colors.text};
    padding:5px 15px;
    border-width:1px;
    background-color: transparent;
    border-radius: 5px;
    font-size: 16px;
    cursor:pointer;
}

.btn:hover {
    border-color: ${({ theme }) => theme.colors.text};
    color:${({ theme }) => theme.colors.body};
    background-color: ${({ theme }) => theme.colors.text};

}
.link:hover{
     color: ${({ theme }) => theme.colors.invert};
}
.lb-comp{
    background:${({ theme }) => theme.colors.invert};
    color:${({ theme }) => theme.colors.body};
    padding:3px 10px;
    border-radius: 50px;
}
`;
