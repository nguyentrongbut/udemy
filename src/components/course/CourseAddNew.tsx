"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input";
import {useState} from "react";
import slugify from "slugify";
import {createCourse} from "@/lib/actions/course.actions";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";



const formSchema = z.object({
    title: z.string().min(10, "Tên khoá học phải có ít nhất 10 ký tự!"),
    slug: z.string().optional(),
})

const CourseAddNew = () => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const data =  {
                title: values.title,
                slug: values.slug || slugify(values.title, {
                    lower: true,
                    locale: "vi",
                }),
            }
            const res = await createCourse(data)
            if (res?.success) {
                toast.success("Tạo khoá học thành công!")
            }
            if (res?.data) {
                router.push(`/manage/course/update?slug=${res.data.slug}`)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false)
            form.reset()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" autoComplete="off" >
                <div className="grid grid-cols-2 gap-8 mt-10">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên khoá học *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tên khoá học ..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Đường dẫn khoá học</FormLabel>
                                <FormControl>
                                    <Input placeholder="khoa-hoc-lap-trinh" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button isLoading={isSubmitting} variant="primary" type="submit" className="w-[120px]" disabled={isSubmitting}>Tạo khoá học</Button>
            </form>
        </Form>
    )
}

export default CourseAddNew