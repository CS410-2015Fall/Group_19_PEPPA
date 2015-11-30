describe("account", function() {
  var signin;
  var emailAddress;
  var password;
  var PePPA = PePPA;
  
  beforeEach(function()
	signin = new PePPA.SignInController();
	emailAddress = "test@mail.com";
	password = "testing";
  )
  
  it("should be able to sign in successfully", function(emailAddress, password){
		var result = signin.login(emailAddress, password);
		expect(result.email).toEqual(JSON.stringify({email: "test@mail.com"}));
	});
  
}