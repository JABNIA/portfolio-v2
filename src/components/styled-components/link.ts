import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ProfileLink = styled(NavLink)`
    color: ${colors.matrixGreen};
    text-decoration: none;

    &:hover {
        color: ${colors.neonColorGreen};
    }

    &:active {
        color: #d8240c;
    }
`