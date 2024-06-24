import dynamic from 'next/dynamic';
import { useState } from "react";

const CircleCheckIcon = dynamic(() => import("../../../public/iconsjsx/CircleCheck"));
const CircleXIcon = dynamic(() => import("../../../public/iconsjsx/CircleX"));
const EyeIcon = dynamic(() => import("../../../public/iconsjsx/Eye"));
const EyeBlockIcon = dynamic(() => import("../../../public/iconsjsx/EyeBlock"));
const ConditionalRender = dynamic(() => import("../ConditionalRender"));

export const defaultStyle = 'text-black txt16M txt16W bg-white focus:outline-none truncate';

export function InputText({disabled, opacity=true, id, type='text', maxlength='', required=false, showIcons=false, errorIcon=false, succesIcon=false, placeholder, value, onChange, classContainer='', classInput='', multiple=false}) {
    return <div 
        className={[
            `${disabled ? (opacity == true) ? 'opacity-40' : 'opacity-100': 'opopacity-0'}`,
            "bg-white flex justify-between items-center gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]",
            `${classContainer}`
        ].join(" ")}
    >
        <input
            disabled={disabled}
            id={id}
            name={id}
            type={type}
            maxLength={maxlength}
            required={required}
            placeholder={placeholder}
            value={value}
            className={`${classInput} w-full ${type == 'date' ? 'text-black text-[10.7px] sm:text-[12.7px] md:text-[14.7px] lg:text-[10.7px] xl:text-[12.7px] 2xl:text-[14.7px] bg-white focus:outline-none' : defaultStyle}`}
            onChange={onChange}
            multiple={multiple}
        />

        <ConditionalRender cond={showIcons} >
            <div className='block'>
                <ConditionalRender cond={succesIcon}>
                    <CircleCheckIcon className="stroke-green-600 w-[18px] sm:w-[21px] md:w-[24px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]" />
                </ConditionalRender>
                <ConditionalRender cond={errorIcon}>
                    <CircleXIcon className="stroke-red-800 w-[18px] sm:w-[21px] md:w-[24px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]" />
                </ConditionalRender>
            </div>
        </ConditionalRender>
    </div>
}

export function InputPassword({disabled, id, required=false, showIcons=false, errorIcon=false, succesIcon=false, placeholder, value, onChange, classContainer='', classInput=''}) {
    const [showPassword, setShowPassword] = useState(false);

    const changeType = async() => {
        setShowPassword(!showPassword)
    }

    return <div 
        className={[
            `${disabled && 'opacity-40'}`,
            "bg-white flex justify-between items-center gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]",
            `${classContainer}`
        ].join(" ")}
    >
        <input
            disabled={disabled}
            id={id}
            name={id}
            type={showPassword ? 'text' : 'password'}
            required={required}
            placeholder={placeholder}
            value={value}
            className={`${defaultStyle}${classInput} w-full`}
            onChange={onChange}
        />

        <ConditionalRender cond={showIcons} >
            <div className='block'>
                <ConditionalRender cond={succesIcon} >
                    <CircleCheckIcon className="stroke-green-600 w-[18px] sm:w-[21px] md:w-[24px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]" />
                </ConditionalRender>
                <ConditionalRender cond={errorIcon}>
                    <CircleXIcon className="stroke-red-800 w-[18px] sm:w-[21px] md:w-[24px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]" />
                </ConditionalRender>
            </div>
        </ConditionalRender>

        <ConditionalRender cond={showPassword}>
            <button onClick={() => changeType()} type="button">
                <EyeBlockIcon className="stroke-black w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px]" />
            </button>
        </ConditionalRender>
        <ConditionalRender cond={!showPassword}>
            <button onClick={() => changeType()} type="button">
                <EyeIcon className="stroke-black w-[18px] sm:w-[21px] md:w-[24px] h-[18px] sm:h-[21px] md:h-[24px]" />
            </button>
        </ConditionalRender>
    </div>
}

export function InputSearch({disabled, id, type='text', required=false, value, onChange, classContainer='', classInput=''}) {
    return <div 
        className={[`
            ${disabled && 'opacity-40'}`,
            "bg-white flex justify-between items-center gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]",
            `${classContainer}`
        ].join(" ")}
    >
        <input
            disabled={disabled}
            id={id}
            name={id}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            className={`${defaultStyle} ${classInput} w-full`}
            onChange={onChange}
        />

        <div className='block'>
            <SearchIcon 
                type="submit"
                className="iconSize" 
            />
        </div>
    </div>
}

export function Textarea({disabled, id, showIcons=false, errorIcon=false, succesIcon=false, placeholder, value, onChange, classContainer='', classInput='', opacity='opacity-40'}) {
    return <div 
        className={[
            `${disabled && opacity}`,
            "bg-white flex justify-between items-center gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[6px] xl:gap-[7px] 2xl:gap-[8px]",
            `${classContainer}`
        ].join(" ")}
    >
        <textarea
            disabled={disabled}
            id={id}
            name={id}
            rows="6"
            input="onInput"
            placeholder={placeholder}
            value={value}
            className={`${defaultStyle} ${classInput} w-full scrollDesing `}
            onChange={onChange}
            keydown="onKeyDown"
            keyup="onKeyUp"
            scroll="onScroll"
            x-ref="textarea"
        />
        
        <ConditionalRender cond={showIcons}>
            <div className='block'>
                <ConditionalRender cond={succesIcon}>
                    <CircleCheckIcon className="stroke-green-600 w-[18px] sm:w-[21px] md:w-[24px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]" />
                </ConditionalRender>
                <ConditionalRender cond={errorIcon}>
                    <CircleXIcon className="stroke-red-800 w-[18px] sm:w-[21px] md:w-[24px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] h-[18px] sm:h-[21px] md:h-[24px] lg:h-[18px] xl:h-[21px] 2xl:h-[24px]" />
                </ConditionalRender>
            </div>
        </ConditionalRender>
    </div>
}