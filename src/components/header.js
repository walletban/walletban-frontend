import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

export default function Header() {
  return (
    <main>
      <header className="flex justify-between p-4  text-white">
        <div>
          <h1 className="text-3xl font-bold p-2">Walletban</h1>
        </div>
        <nav className="flex items-center space-x-5">
          <a href="#" class="text hover:underline !hover:text-gray">
            <Label className="text-lg">About</Label>
          </a>
          <a href="#" className="hover:underline">
            <Label className="text-lg">API Docs</Label>
          </a>
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </nav>
      </header>
      <Separator />
    </main>
  );
}
