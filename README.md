NodeGitDeploy [![Build Status](https://travis-ci.org/webmakersteve/Gitploy.svg?branch=master)](https://travis-ci.org/webmakersteve/Gitploy)
=============

## This software is still in **active** development and is not yet ready. When you see a stable branch on the repository, it will be ready for use. 

Custom deployment software integrated into GitHub and CI Servers

============

### Why am I making this?

I work with clients that often have their servers hidden behind firewalls for security in QA environments. This means I only have access to those servers when in-network or on VPN. If I do my work locally, in order to do a simple push to their environments in a QA server I would need to shell in and pull the new code. NOT ANYMORE!

Gitploy is meant to work with continuous integration server webhooks, or you can bypass the whole thing and just make it work with Git. It depends on your requirements.

#### What happens?

Let's say you push a commit to your external repository. If you have a CI solution set up, it hooks in. In your CI configuration, if the build passes, you send a simple HTTP request with a secret token to the Gitploy host server. The server has built in configuration to look at the route you have sent it to and load instances running the software. It then pings the servers telling them there is an updated version of passing code to deploy. They use their deploy keys and fetch from the remote repository.

It's as simple is that! With one external web-facing gitploy server you can host a large multitude of servers. It doesn't keep connections open and only uses them as it needs.

The software can also be used to deploy code to a cluster of servers instead of manually shelling in to each and pulling updated code.

I hope this helps you with whatever projects you're working on

I will be open to contributions when the core is created
