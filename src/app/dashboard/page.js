"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function Auth() {
  const [title, setTitle] = useState("Benro's Project");
  const [credentials, setCredentials] = useState([
    {
      title: "API Keys",
      data: "asdfasdf",
    },
    {
      title: "Client ID",
      data: "asdfasdf",
    },
    {
      title: "Client Secret",
      data: "asdfasdf",
    },
  ]);
  const [consumer, setConsumer] = useState([{}]);
  return (
    <main className="">
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-2 gap-2 ">
        <div>
          <div className="pt-4 pr-4 pl-4 col-span-full">
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  Kudos! Your project is going great!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="pt-2 pr-4 pl-4 col-span-full">
            <Card>
              <CardHeader>
                <CardTitle>Your Project Credentials</CardTitle>
                <CardDescription>Ensure to keep them safe!</CardDescription>
              </CardHeader>
              {credentials.map((element) => {
                return (
                  <CardContent key={element.title}>
                    {KeyItem(element.title, element.data)}
                  </CardContent>
                );
              })}
            </Card>
          </div>
        </div>

        <div className="pt-4 pr-4">
          <Card className="h-auto">
            <CardHeader>
              <CardTitle>Current Users of the Project</CardTitle>
              <CardDescription>
                Displays the Users of the Project
              </CardDescription>
            </CardHeader>
            <CardContent>
              {[1, 2, 3, 4, 5, 6].map((element) => {
                return (
                  <div key={element}>
                    <HoverCard>
                      <HoverCardTrigger>{CardItem()}</HoverCardTrigger>
                      <HoverCardContent>
                        User G Key: G123189018230 Wallet Activated: True
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

const CardItem = () => {
  return (
    <Card className="mt-2">
      <div className="flex p-2  rounded ">
        {/* Profile Picture */}
        <div className="">
          <Avatar className="mt-2 mr-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {/* Content (Name and Email) */}
        <div className="flex-1">
          <div className="mt-1">
            <span className="font-bold">John Doe</span>
          </div>
          <div>
            <span className="text-gray-400">john.doe@example.com</span>
          </div>
        </div>
        <Button className="mt-2 mr-2 bg-red-50">Block</Button>
      </div>
    </Card>
  );
};

const KeyItem = (title, data) => {
  return (
    <Card className="mt-1">
      <div className="flex p-1  rounded ">
        {/* Content (Name and Email) */}
        <div className="flex-1">
          <div className="m-2">
            <span className="font-bold">{title}</span>
          </div>
          <div>
            <span className="text-gray-400 m-2">{data}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
