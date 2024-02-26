'use client'

import React from "react";
import Link from "next/link";
import Icon from "../../components/Icon";
import { useSelectedLayoutSegment } from 'next/navigation';
import { IconsEnumKeys } from '@specs/icons';
import s from './nav.module.scss';

interface NavBarProps {
    id: number;
    label: string;
    href: string;
    icon: IconsEnumKeys;
}

export const NavBar: React.FC<NavBarProps> = ({label, href, icon}) => {
    const selectedSegment = useSelectedLayoutSegment();
    const isSelected = selectedSegment === href || (selectedSegment === null && href === "/");
    console.log(selectedSegment)

    return (
        <Link className={`${s.nav} ${isSelected ? s.nav__selected : ''}`} href={href}>
                <div className={s.nav__container}>
                        <Icon color={isSelected ? '#ffffff' : '#49B94E'} name={icon} width={32} height={26}/>
                        {label}
                </div>
        </Link>
    );
}
