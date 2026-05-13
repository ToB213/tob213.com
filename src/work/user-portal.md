---
layout: work-detail.njk
templateEngineOverride: njk
title: LDAP登録システム
description: 研究室で利用するLDAP認証とSamba認証のためのユーザー登録システム。
work:
  category: projects
  label: Project
  year: 2026
  type: Tool
  order: 202602
  summary: 研究室で利用する LDAP 認証と Samba 認証のためのユーザー登録システム。
  media:
    type: image
    src: /images/user-portal.png
    alt: LDAP登録システムのスクリーンショット
    caption: LDAP登録システムのスクリーンショット
  details:
    - label: Stack
      html: |-
        <ul>
          <li>Web: Next.js + TypeScript + Tailwind</li>
          <li>API: NestJS + TypeScript + JWT</li>
        </ul>
    - label: Features
      html: |-
        <ul>
          <li>ユーザー登録・編集</li>
          <li>LDAP連携</li>
          <li>Samba連携</li>
          <li>パスワード変更</li>
        </ul>
---
