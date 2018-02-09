<template>
  <div :class="$style.loginBox">
    <div :class="$style.dialogInner">
      <h2 :class="$style.h2">Sign in</h2>
      <form :class="$style.form" v-on:submit.prevent>
        <div :class="$style.group1">
          <span :class="$style.addon"><i class="fas fa-user-circle" /></span>
          <input :class="$style.input" v-model="inputId" type="text" placeholder="UserID" />
        </div>
        <div :class="$style.group1">
          <span :class="$style.addon"><i class="fas fa-key" /></span>
          <input :class="$style.input" v-model="inputPassword" type="password" placeholder="Password" />
        </div>
        <div :class="$style.group2">
          <button :class="$style.button" v-on:click="onClick">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputId: "",
        inputPassword: ""
      }
    },
    methods: {
      onClick() {
        var myInit = { method: 'POST',
                       headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" }),
                       body: "userid="+this.inputId+"&password="+this.inputPassword
                      };
        // console.log(this.inputId);
        fetch('/api/authenticate',myInit)
        .then(function(res) {
          return res.json();
        })
        .then(function(res) {
          // if(res.error.error)
          //   Alert.error(res.error.message);
          // else {
          //   window.localStorage.setItem('userToken',res.data.token);
          //   window.localStorage.setItem('userId',res.data.user.id);
          //   window.localStorage.setItem('userEmail',res.data.user.token);
          // }
        });
      }
    }
  }
</script>

<style module lang="scss">
.loginBox {
  max-width: 500px;
  margin: 0px auto;
  background-color: transparent;
  text-align: center;

  .dialogInner {
    top: 0;
    left: 0;
    padding: 42px 48px;
    background: #fff;
    margin-bottom: 40px;

    box-shadow: 0 1px 40px 0 rgba(0,0,0,0.3);
    border-radius: 3px;

    .h2 {
      margin: auto;
    }

    .form {
      margin-top: 10px;
      font-size: 1.3em;

      .group1 {
        margin: 20px;
        border: 1px solid;
        border-radius: 1em;
        text-align: left;

        .addon {
          padding: 5px 10px;
          border-right: 1px solid;
        }
        .input {
          border: none;
          font-size: 1em;
        }
      }

      .group2 {
        margin: 20px;

        .button {
          border: 1px solid;
          border-radius: 1em;
          font-size: 1em;
          width: 100%;
          height: 2em;
        }
      }

    }
  }
}




</style>
