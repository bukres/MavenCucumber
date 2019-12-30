package pageFactoryBase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class PageFactoryBase {

	static WebDriver driver;

	// https://www.youtube.com/watch?v=UIn6dIRyyO4&list=PLfxMQwBheOZnqsrMiRaW1fllpl-iCCM83

	public static void openBrowser(String url) {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
	}
//	public static void sendValue(String val, String locator) {
//		WebElement ele = driver.findElement(By.xpath(locator));
//		ele.clear();
//		ele.sendKeys(val);
//	
//
//}

}
