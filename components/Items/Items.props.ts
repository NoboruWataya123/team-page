import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
}