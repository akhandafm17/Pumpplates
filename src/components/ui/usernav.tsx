import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useSession } from "next-auth/react";
  import { signOut } from "next-auth/react"
  import { useRouter } from 'next/navigation'
  
  export function UserNav() {
  const { data: session } = useSession();
  const userImage = session?.user?.image;
  const username = session?.user?.name;
  const useremail = session?.user?.email;
  const router = useRouter();

  function handleItemClick(event: any) {
    const itemLabel = event.target.textContent;
    switch (itemLabel) {
      case "Profile":
        console.log("Profile clicked");
        router.push('/profile');
        break;
      case "Billing":
        console.log("Billing clicked");
        router.push('/billing');
        break;
      case "Settings":
        console.log("Settings clicked");
        router.push('/settings');
        break;
      case "Log out":
        console.log("Log out clicked");
        signOut();
        break;
      default:
        break;
    }
  };
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={userImage as string} alt="user profile" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-black" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{username as string}</p>
              <p className="text-xs leading-none text-muted-foreground">
               {useremail as string}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleItemClick}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleItemClick}>
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleItemClick}>
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="text-white"/>
          <DropdownMenuItem className="text-red-500" >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }