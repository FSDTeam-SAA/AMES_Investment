import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="max-w-[407px] bg-zinc-900 border-zinc-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold text-white">Login</CardTitle>
          <CardDescription className="text-center text-zinc-400">Let's login into your account first</CardDescription>
        </CardHeader>
        <CardContent>
          {status && <div className="text-green-500 text-center">{status}</div>}
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="yourname@gmail.com"
                className="bg-zinc-800 border-zinc-700 text-white"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className="bg-zinc-800 border-zinc-700 text-white"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-zinc-400 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                </button>
              </div>
              {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              <div className="text-right">
                {canResetPassword && (
                  <a href={route("password.request")} className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot Password?
                  </a>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
              disabled={processing}
            >
              {processing ? "Logging in..." : "Login"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-zinc-400">Don't have an account? </span>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                Register Here
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
