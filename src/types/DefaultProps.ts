import { ReactNode } from "react"

export type DefaultProps = {
    /** An element type to render as (string or function). */
    as?: any,
    /** Additional classes. */
    className?: string,
    /** Primary content. */
    children?: ReactNode
}