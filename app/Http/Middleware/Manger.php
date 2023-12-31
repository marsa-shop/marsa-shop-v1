<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;

class Manger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth('manger')->user()) {
            return $next($request);
        }
        return redirect(RouteServiceProvider::MANGER);
    }
}
