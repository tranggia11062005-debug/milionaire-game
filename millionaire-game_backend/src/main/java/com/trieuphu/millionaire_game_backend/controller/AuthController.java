package com.trieuphu.millionaire_game_backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class AuthController {
    @PostMapping("/register")
    public String registerUser(@RequestParam String username, @RequestParam String password) {
        return "register";
    }
}
