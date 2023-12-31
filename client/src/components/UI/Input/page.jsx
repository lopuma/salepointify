'use client'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const inputVariants = cva(
	`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
    read-only:cursor-not-allowed read-only:opacity-50 read-only:bg-gray-200
    dark:bg-gray-800 dark:text-gray-400 dark:placeholder-gray-400 dark:border-gray-600 dark:focus-visible:ring-ring `,
	{
		variants: {
			errorState: {
				true: 'border-never focus-visible:ring-never-foreground dark:focus-visible:ring-never dark:border-never-foreground dark:focus-visible:border-never-foreground'
			}
		},
		defaultVariants: {
			errorState: false
		}
	}
)

export const InputComponent = ({
	name,
	editMode = false,
	inputRefs,
	id,
	type,
	placeholder,
	value,
	onChange,
	className,
	errorState,
	required = false,
	...props
}) => {
	return (
		<input
			ref={inputRefs ?? inputRefs}
			name={name}
			className={cn(inputVariants({ errorState, className }))}
			id={id}
			type={type || 'text'}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			readOnly={editMode}
			required={required}
			{...props}
		/>
	)
}
