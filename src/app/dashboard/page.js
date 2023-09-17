"use client";

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
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function Dashboard() {
  const url = "http://localhost:8000";
  const [title, setTitle] = useState("Benro's Project");
  const [pfp, setPfp] = useState("https://github.com/shadcn.png");
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
  const [consumer, setConsumer] = useState([
    {
      ID: 2,
      CreatedAt: "2023-09-18T00:08:29.845217+05:30",
      UpdatedAt: "2023-09-18T00:08:29.845217+05:30",
      DeletedAt: null,
      ProjectID: 2,
      Name: "Hemanth Krishna",
      Email: "",
      IsFirstTime: true,
      IsWalletActivated: false,
      WalletGKey: "",
      WalletEncryptedSKey: "",
    },
  ]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const data = axios.get(`${url}/v0/dashboard`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      data
        .then((res) => {
          setTitle(res.data.data.Project.Name);
          setCredentials([
            {
              title: "API Keys",
              data: res.data.data.Project.ApiKey,
            },
            {
              title: "Client ID",
              data: res.data.data.Project.ClientId,
            },
            {
              title: "Client Secret",
              data: res.data.data.Project.ClientSecret,
            },
          ]);
          setPfp(res.data.data.PfpUrl);
          setConsumer(res.data.data.Project.Consumers);
        })
        .catch((err) => {
          //TODO: toast an error
        });
    } else {
      //TODO: re route to home
    }
  }, []);

  return (
    <main className="">
      <div>
        <Header pfp={pfp} />
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
              {consumer.map((element) => {
                return (
                  <div key={element}>
                    <HoverCard>
                      <HoverCardTrigger>{CardItem(element)}</HoverCardTrigger>
                      <HoverCardContent>
                        {`User G Key: ${element.WalletGKey},`}
                        {`Wallet Activated: ${element.IsFirstTime}`}
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

const CardItem = (item) => {
  return (
    <Card className="mt-2">
      <div className="flex p-2  rounded ">
        {/* Profile Picture */}
        <div className="">
          <Avatar className="mt-2 mr-2">
            <AvatarImage src={item.PfpUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {/* Content (Name and Email) */}
        <div className="flex-1">
          <div className="mt-1">
            <span className="font-bold">{item.Name}</span>
          </div>
          <div>
            <span className="text-gray-400">{item.Email}</span>
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
