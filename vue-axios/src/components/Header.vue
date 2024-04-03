<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :class="{ 'active': $route.path === '/' }" to="/">List Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ 'active': $route.path === '/users' }" to="/users">List Users</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>