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
        // Manually create sitemap
        $sitemap = Sitemap::create();

        // Static pages
        $sitemap->add('/');

        // Dynamic pages
        $articles = Work::all();
        foreach ($articles as $article) {
            $sitemap->add("/{$article->slug}");
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));
    }
}
