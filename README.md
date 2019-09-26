# LAPPIS website

This repository is responsible for holding all the LAPPIS website.

The technology adopted to develop this site was Jekyll. Jekyll is a simple, extendable, static site generator. You give it text written in your favorite markup language and it churns through layouts to create a static website. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more.

![](https://github.com/lappis-unb/lappis.rocks/raw/development/images/home.png)

## Getting Started

#### Docker

```console
docker run -p 4000:4000 --rm -it $(docker build -q .)
```

#### Manual
1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and bundler gems
```bash
gem install jekyll bundler
```
3. Build the site and make it available on a local server
```
bundle exec jekyll serve
```

Open http://localhost:4000
