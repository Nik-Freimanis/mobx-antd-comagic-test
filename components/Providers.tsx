'use client'

import {FC, PropsWithChildren} from "react";
import {SessionProvider} from "next-auth/react";
import {AntdRegistry} from "@ant-design/nextjs-registry";

export const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <SessionProvider>
            <AntdRegistry>
                {children}
            </ AntdRegistry>
        </SessionProvider>
    )
}