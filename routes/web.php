<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/plans', function () {
    return Inertia::render('plans');
})->name('plans');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/career', function () {
    return Inertia::render('career');
})->name('career');

Route::get('/goc', function () {
    return Inertia::render('goc');
})->name('goc');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/faq', function () {
    return Inertia::render('faq');
})->name('faq');

Route::get('/policy-holder', function () {
    return Inertia::render('policy-holder');
})->name('policy-holder');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
