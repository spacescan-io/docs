---
sidebar_position: 3
---

# Chia Tax Statements

## 1) For Chia farmers / Traders who started with/after Chia version 1.3

If you began farming Chia with or after version 1.3, it is likely that you are using observer keys. The new version of the Chia client uses observer keys by default, which allow for public derivation. The main advantage of observer keys is the ability to support read-only wallets.

1. First, visit the  [**Chia Tax page in spacescan.io**](https://www.spacescan.io/statements)
2. Enter the public key from GUI or Master key from CLI (chia keys show)
    - **Chia wallet GUI**:

        ![chia tax public key from GUI 1](tax_5.0.png)

        ![chia tax public key from GUI 2](tax_5.1.png)

    - **Chia CLI**:
        ![chia tax public key from CLI](tax_5.2.png)

3. Select the start and end dates, as well as the desired currency, and click on the "calculate" button.
4. The report will be generated in a few minutes. Please note that the report generation time will depend on the number of transactions associated with the provided address.
    
    ![Chia tax report from pub key](tax_6.png)

    ![Chia tax report files from pub key](tax_7.png)

    ![Chia tax report summary from pub key](tax_8.png)

    ![Chia tax report csv from pub key](tax_9.png)

## 2) For Chia farmers who started farming before Chia version 1.3

If you started farming Chia before version 1.3, then it is likely that you are using a hardened key, which requires the use of an XCH address to generate a statement for that key. Prior versions of the Chia client utilized non-observer wallet keys, which although secure, presented a drawback. Namely, a parent public key could not be used to derive a child public key, rendering read-only wallets impossible with Chia's old keys.

To generate your tax statement, please follow these steps:

1. First, visit the  [**Chia Tax page in spacescan.io**](https://www.spacescan.io/statements)
2. Enter the XCH address that you used to receive your farming rewards.

    ![farming reward](farming_reward.png)

3. Select the start and end dates, as well as the desired currency, and click on the "calculate" button.

    ![chia tax enter address](tax_1.png)

    ![chia tax select dates](tax_2.png)

4. The report will be generated in a few minutes. Please note that the report generation time will depend on the number of transactions associated with the provided address.
    ![Chia tax report starts](tax_3.png)

    ![Chia tax report generated](tax_4.png)

## 3) To pay in XCH using wallet connect, follow these steps:

1. log in to spacescan using your email ID and Select the plan.

    ![Chia tax step 1](plan_xch_1.png)

2. A QR code will appear, Click on the "COPY TO CLIPBOARD" link at the bottom of the code.

    ![Chia tax step 2](plan_xch_2.png)
3. Open your Chia wallet and select the wallet connect option.

    ![Chia tax step 3](plan_xch_3.png)
4. Click "Add connection" and paste the wallet connect string as shown below and Click "Continue".

    ![Chia tax step 4](plan_xch_4.png)
5. Once connected, refresh the price plan page in Spacescan and click on the "Pay" option.

    ![Chia tax step 5](plan_xch_5.png)
6. Select the transaction fee and confirm payment.

    ![Chia tax step 6](plan_xch_6.png)
7. Approve the payment in your Chia wallet.

    ![Chia tax step 6.1](plan_xch_6.1.png)
8. Wait for confirmation from the blockchain, then click on "Done".

    ![Chia tax step 7](plan_xch_7.png)
9. The page will load with your purchased plan.

    ![Chia tax step 8](plan_xch_8.png)

    ![Chia tax step 9](plan_xch_9.png)
