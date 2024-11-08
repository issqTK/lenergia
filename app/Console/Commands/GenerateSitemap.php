<?php

namespace App\Console\Commands;

use App\Models\Work;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate sitemap';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if (file_exists(public_path('sitemap.xml'))) {
            unlink(public_path('sitemap.xml'));
        }
        $sitemap = Sitemap::create();

        // Set the base URL to avoid "localhost" in URLs
        $baseUrl = config('app_url');

        // Static pages
        $sitemap->add("{$baseUrl}/");

        // Dynamic pages
        $articles = Work::all();
        foreach ($articles as $article) {
            $sitemap->add("{$baseUrl}/{$article->slug}");
        }

        // Save the sitemap
        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
