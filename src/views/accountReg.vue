<template>
    <div class="account-container">
        <div class="header">
            <img src="../assets/img/inst.png" alt="">
            <p>МОЙ АККАУНТ</p>
        </div>
        <div class="log-and-reg">
            <form id="login-form">
                <p>Login</p>
                <div class="data">
                    <p>Username or email address *</p>
                    <input type="text" name="email-log" id="email-log" required>
                </div>
                <div class="data">
                    <p>Password *</p>
                    <input type="password" name="password-log" id="password-log" required>
                </div>
                <div class="remember-forget">
                    <div class="remember">
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="#">Lost your password?</a>
                </div>
                <button type="submit">LOG IN</button>
            </form>
            <form id="register-form">
                <p class="heading">Register</p>
                <div class="data">
                    <p>Email address *</p>
                    <input type="email" name="email-reg" id="email-reg" required>
                </div>
                <div class="data">
                    <p>Password *</p>
                    <input type="password" name="password" id="password" required>
                </div>
                <div class="for-seller" v-if="role === 'seller'">
                    <div class="data-block">
                        <div class="data">
                            <p>Имя *</p>
                            <input type="text" name="name" id="name" required>
                        </div>
                        <div class="data">
                            <p>Фамилия *</p>
                            <input type="text" name="lastname" id="lastname" required>
                        </div>
                    </div>
                    <div class="data">
                        <p>Название магазина *</p>
                        <input type="text" name="shop-name" id="shop-name"  required>
                    </div>
                    <div class="data">
                        <p>URL магазина *</p>
                        <input type="text" name="shop-url" id="shop-url" required>
                        <p class="url">https://harvunity.com/store/</p>
                    </div>
                    <div class="data-block">
                        <div class="data">
                            <p>Company Name</p>
                            <input type="text" name="company-name" id="company-name"
                                required>
                        </div>
                        <div class="data">
                            <p>Name of Bank</p>
                            <input type="text" name="bank" id="bank" required>
                        </div>
                    </div>
                    <div class="data">
                        <p>Номер телефона *</p>
                        <input type="tel" name="number" id="number" required>
                    </div>
                </div>
                <div class="who-are-you">
                    <div class="person">
                        <input type="radio" name="role" id="client" value="client" v-model="role" required checked>
                        <label for="client">
                            <p>Я покупатель</p>
                        </label>
                    </div>
                    <div class="person">
                        <input type="radio" name="role" id="seller" value="seller" v-model="role" required>
                        <label for="seller">
                            <p>Я продавец</p>
                        </label>
                    </div>
                </div>
                <p class="private-policy">Ваши личные данные будут использоваться для упрощения вашего дальнейшего
                    взаимодействия с сайтом,
                    управления доступом к вашему аккаунту и других целей, описанных в документе
                    <a href="#">privacy policy</a>.
                </p>
                <button type="submit">REGISTER</button>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            role: 'client',
        };
    },
}
</script>
