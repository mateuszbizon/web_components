export const CONTAINER_TEXT_CODE = `import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type ContainerProps = ComponentProps<"div">

function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div className={cn('size-full max-w-300 mx-auto px-5', className)} {...props}>
            {children}
        </div>
    )
}

export default Container`