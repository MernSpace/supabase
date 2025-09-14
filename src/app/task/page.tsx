"use client"
import { useTRPC } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { userInsertSchema } from "@/modules/auth/schema";


const Page = () => {
    const trpc = useTRPC();
    const router = useRouter()
    const queryClient = useQueryClient()
    const createUser = useMutation(
        trpc.user.create.mutationOptions({
            onSuccess: async () => {

            },
            onError: (error) => {
                toast.error(error.message)

            }
        })
    )





    const form = useForm<z.infer<typeof userInsertSchema>>({
        resolver: zodResolver(userInsertSchema),
        defaultValues: {
            name: "",
            email: "",
        }
    })

    const isPending = createUser.isPending

    const onSubmit = (values: z.infer<typeof userInsertSchema>) => {
        createUser.mutate(values)

    }

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="e.g Math AI" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Instructions</FormLabel>
                            <FormControl>
                                <Textarea {...field}
                                    placeholder="example@gmail.com"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <div className="flex justify-between gap-x-2">
                    <Button
                        disabled={isPending}
                        type="submit"
                    >
                        Create
                    </Button>
                </div>

            </form>
        </Form>
    )
}


export default Page